import { Box, Grid, Typography, Paper, CircularProgress, Tooltip, IconButton } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import TreeSelection from './components/TreeSelection';
import React, { useCallback, useEffect, useState } from 'react';
import DataTable from './components/DataTable';
import { LabelMapper } from './components/LabelMapper';
import AboutDataDialog from './components/AboutDataDialog';

interface TableData {
    columns: string[];
    rows: Record<string, string | number>[];
}

type FetchedRow = Record<string, string | number>;

const transformFetchedData = (rawData: FetchedRow[]): TableData => {
    const columns = ["Country", "ISO-3 Code", "2021", "2020", "2019", "2015", "2010", "2000"]
    // const rows = rawData.map((row) => columns.map((column) => row[column]));
    const rows = rawData;
    return { columns, rows };
}

export default function Main() {
    const initialSelectedItem = "All_Causes";
    const [selectedItem, setSelectedItem] = useState<string>(initialSelectedItem);
    const [currentTableData, setCurrentTableData] = useState<TableData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [aboutDialogOpen, setAboutDialogOpen] = useState(false);
    const handleAboutDialogOpen = () => setAboutDialogOpen(true);
    const handleAboutDialogClose = () => setAboutDialogOpen(false);
    const [ageStandarized, setAgeStandardized] = useState(true);

    const handleSelectedItemChange = useCallback((_event: (React.SyntheticEvent | null) , itemId: string) => {
        setSelectedItem(itemId);
    }, []);

    const handleAgeStandardizedChange = useCallback((_event: (React.SyntheticEvent | null) , isAgeStandardized: boolean) => {
        setAgeStandardized(isAgeStandardized);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);
            setCurrentTableData(null);
            // await new Promise(r => setTimeout(r, 2000));
            try {
                console.log(`Fetching data from /data/${ageStandarized?"asdr/":""}${selectedItem}.json`);
                const response = await fetch(`/data/${ageStandarized?"asdr/":""}${selectedItem}.json`);
                if (!response.ok) {
                    if (response.status === 404) {
                        throw new Error('Data not found for selected item ' + selectedItem);
                    }
                    throw new Error('HTTP error ${response.status}: ' + response.statusText + ' for selected item ' + selectedItem);
                }
                const rawData: FetchedRow[] = await response.json();
                const data = transformFetchedData(rawData);
                setCurrentTableData(data);
            } catch (e: any) {
                console.error("Failed to fetch or process table data:", e);
                setError(e.message || "Failed to load or process data. Please check the console.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [selectedItem, ageStandarized]);

    return (
        <Box sx={{ flexGrow: 1, padding: 2, height: '90vh', display: 'flex', overflow: 'auto' }}>
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                <Grid size={{ xs: 12, md: 4 }} sx={{ order: { xs: 2, md: 1 }, height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h6" gutterBottom>Select a Cause of Death</Typography>
                    <Paper sx={{ display: 'flex', overflow: 'auto', flexGrow: 1, eleveation: 3 }}>
                        <TreeSelection
                            selectedItem={selectedItem}
                            onSelectedItemChange={handleSelectedItemChange}
                        />
                    </Paper>
                </Grid>
                <Grid size={{ xs: 12, md: 8 }} sx={{ order: { xs: 1, md: 2 }, height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 2, position: 'relative', textAlign: 'center', pr: (theme) => theme.spacing(8) }}>
                        <Typography variant="h6" gutterBottom>{LabelMapper[selectedItem]} - {ageStandarized? "Age standardized":"Crude"} death rates per 100 000 population by country</Typography>
                        <Tooltip title="Data obtained from WHO" arrow sx={{ position: 'absolute', right: (theme) => theme.spacing(2), top: '50%', transform: 'translateY(-50%)' }}>
                            <IconButton
                                size='small'
                                aria-label='Data source information'
                                onClick={handleAboutDialogOpen}
                            >
                                <InfoOutlinedIcon fontSize='large' />
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <Paper sx={{ flexGrow: 1, overflow: 'auto', elevation: 3 }}>
                        {isLoading && (
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center', // Center horizontally
                                    alignItems: 'center',    // Center vertically
                                    height: '100%',          // Take full height of the Paper
                                    width: '100%',           // Take full width
                                }}
                            >
                                <CircularProgress /> {/* Just the spinner */}
                            </Box>
                        )}
                        {!isLoading && error && (
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center', // Center horizontally
                                    alignItems: 'center',    // Center vertically
                                    flexGrow: 1,             // Take available vertical space
                                    width: '100%',           // Take full width
                                    p: 2 // Add some padding around the icon
                                }}
                            >
                                {/* Tooltip shows the actual error message on hover */}
                                <Tooltip title={error} arrow>
                                    {/* Large Error Icon */}
                                    <ErrorOutlineIcon
                                        sx={{
                                            fontSize: '5rem', // Adjust size as needed (e.g., '64px', '4rem')
                                            color: 'error.main' // Use theme's error color
                                        }}
                                    />
                                </Tooltip>
                            </Box>
                        )}
                        {!isLoading && !error && currentTableData && (
                            <DataTable data={currentTableData} />
                        )}
                    </Paper>
                </Grid>
            </Grid>
            <AboutDataDialog
                open={aboutDialogOpen}
                onClose={handleAboutDialogClose}
                ageStandardized={ageStandarized}
                setAgeStandardized={handleAgeStandardizedChange}
            />
        </Box>

    )
}

