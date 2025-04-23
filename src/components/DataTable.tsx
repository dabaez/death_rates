import { Box } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';

const country_color_map: Record<string, string> = {
    "Afghanistan": "red",
    "Albania": "dark-yellow",
    "Algeria": "red",
    "Angola": "red",
    "Antigua and Barbuda": "light-yellow",
    "Argentina": "light-yellow",
    "Armenia": "green",
    "Australia": "green",
    "Austria": "green",
    "Azerbaijan": "red",
    "Bahamas": "light-yellow",
    "Bahrain": "dark-yellow",
    "Bangladesh": "red",
    "Barbados": "dark-yellow",
    "Belarus": "green",
    "Belgium": "green",
    "Belize": "green",
    "Benin": "red",
    "Bhutan": "red",
    "Bolivia (Plurinational State of)": "red",
    "Bosnia and Herzegovina": "light-yellow",
    "Botswana": "red",
    "Brazil": "green",
    "Brunei Darussalam": "green",
    "Bulgaria": "light-yellow",
    "Burkina Faso": "red",
    "Burundi": "red",
    "Cabo Verde": "dark-yellow",
    "Cambodia": "red",
    "Cameroon": "red",
    "Canada": "green",
    "Central African Republic": "red",
    "Chad": "red",
    "Chile": "green",
    "China": "red",
    "Colombia": "green",
    "Comoros": "red",
    "Congo": "red",
    "Costa Rica": "green",
    "C\u00f4te d'Ivoire": "red",
    "Croatia": "green",
    "Cuba": "green",
    "Cyprus": "green",
    "Czechia": "green",
    "Democratic People's Republic of Korea": "red",
    "Democratic Republic of the Congo": "red",
    "Denmark": "green",
    "Djibouti": "red",
    "Dominican Republic": "dark-yellow",
    "Ecuador": "light-yellow",
    "Egypt": "dark-yellow",
    "El Salvador": "dark-yellow",
    "Equatorial Guinea": "red",
    "Eritrea": "red",
    "Estonia": "green",
    "Eswatini": "red",
    "Ethiopia": "red",
    "Fiji": "dark-yellow",
    "Finland": "green",
    "France": "light-yellow",
    "Gabon": "red",
    "Gambia": "red",
    "Georgia": "light-yellow",
    "Germany": "green",
    "Ghana": "red",
    "Greece": "light-yellow",
    "Grenada": "light-yellow",
    "Guatemala": "green",
    "Guinea": "red",
    "Guinea-Bissau": "red",
    "Guyana": "light-yellow",
    "Haiti": "red",
    "Honduras": "red",
    "Hungary": "green",
    "Iceland": "green",
    "India": "red",
    "Indonesia": "red",
    "Iran (Islamic Republic of)": "light-yellow",
    "Iraq": "dark-yellow",
    "Ireland": "green",
    "Israel": "green",
    "Italy": "green",
    "Jamaica": "green",
    "Japan": "green",
    "Jordan": "light-yellow",
    "Kazakhstan": "green",
    "Kenya": "red",
    "Kiribati": "dark-yellow",
    "Kuwait": "dark-yellow",
    "Kyrgyzstan": "green",
    "Lao People's Democratic Republic": "red",
    "Latvia": "green",
    "Lebanon": "dark-yellow",
    "Lesotho": "red",
    "Liberia": "red",
    "Libya": "red",
    "Lithuania": "green",
    "Luxembourg": "green",
    "Madagascar": "red",
    "Malawi": "red",
    "Malaysia": "dark-yellow",
    "Maldives": "dark-yellow",
    "Mali": "red",
    "Malta": "green",
    "Mauritania": "red",
    "Mauritius": "green",
    "Mexico": "green",
    "Micronesia (Federated States of)": "dark-yellow",
    "Mongolia": "green",
    "Montenegro": "dark-yellow",
    "Morocco": "red",
    "Mozambique": "red",
    "Myanmar": "red",
    "Namibia": "red",
    "Nepal": "red",
    "Netherlands": "green",
    "New Zealand": "green",
    "Nicaragua": "green",
    "Niger": "red",
    "Nigeria": "red",
    "North Macedonia": "light-yellow",
    "Norway": "green",
    "occupied Palestinian territory, including east Jerusalem": "dark-yellow",
    "Oman": "red",
    "Pakistan": "red",
    "Panama": "green",
    "Papua New Guinea": "red",
    "Paraguay": "light-yellow",
    "Peru": "light-yellow",
    "Philippines": "light-yellow",
    "Poland": "light-yellow",
    "Portugal": "green",
    "Puerto Rico": "green",
    "Qatar": "red",
    "Republic of Korea": "green",
    "Republic of Moldova": "green",
    "Romania": "green",
    "Russian Federation": "light-yellow",
    "Rwanda": "red",
    "Saint Lucia": "green",
    "Saint Vincent and the Grenadines": "green",
    "Samoa": "red",
    "Sao Tome and Principe": "red",
    "Saudi Arabia": "green",
    "Senegal": "red",
    "Serbia": "light-yellow",
    "Seychelles": "light-yellow",
    "Sierra Leone": "red",
    "Singapore": "green",
    "Slovakia": "green",
    "Slovenia": "green",
    "Solomon Islands": "dark-yellow",
    "Somalia": "red",
    "South Africa": "light-yellow",
    "South Sudan": "red",
    "Spain": "green",
    "Sri Lanka": "light-yellow",
    "Sudan": "red",
    "Suriname": "light-yellow",
    "Sweden": "green",
    "Switzerland": "green",
    "Syrian Arab Republic": "dark-yellow",
    "Tajikistan": "dark-yellow",
    "Thailand": "dark-yellow",
    "Timor-Leste": "red",
    "Togo": "red",
    "Tonga": "red",
    "Trinidad and Tobago": "dark-yellow",
    "Tunisia": "dark-yellow",
    "T\u00fcrkiye": "light-yellow",
    "Turkmenistan": "red",
    "Uganda": "red",
    "Ukraine": "light-yellow",
    "United Arab Emirates": "dark-yellow",
    "United Kingdom": "green",
    "United Republic of Tanzania": "red",
    "United States of America": "green",
    "Uruguay": "light-yellow",
    "Uzbekistan": "light-yellow",
    "Vanuatu": "red",
    "Venezuela (Bolivarian Republic of)": "green",
    "Viet Nam": "red",
    "Yemen": "red",
    "Zambia": "red",
    "Zimbabwe": "red"
}

const StyledDataGrid = styled(DataGrid)(({}) => ({
    '& .row-color-red': {
        backgroundColor: '#F2DCDB'
    },
    '& .row-color-green': {
        backgroundColor: '#D6E3BC'
    },
    '& .row-color-light-yellow': {
        backgroundColor: '#FFFFCC'
    },
    '& .row-color-dark-yellow': {
        backgroundColor: '#F8ECB8'
    },
    '& .row-color-light-yellow:hover': {
        backgroundColor: '#FFFFCC'
    },
    '& .row-color-dark-yellow:hover': {
        backgroundColor: '#F8ECB8'
    },
    '& .row-color-red:hover': {
        backgroundColor: '#F2DCDB'
    },
    '& .row-color-green:hover': {
        backgroundColor: '#D6E3BC'
    },
    '& .MuiDataGrid-cell:focus': {
        outline: 'none',
    },
    '& .MuiDataGrid-cell:focus-within': {
        outline: 'none',
    },
}));

interface TableData {
    columns: string[];
    rows: Record<string, string | number>[];
}


interface TableProps {
    data: TableData | null;
}

export default function DataTable({ data }: TableProps) {
    if (!data) {
        return <div>Loading...</div>;
    }
    if (data.rows.length === 0) {
        return <div>No data available</div>;
    }
    return (
        <Box sx={{ height: '100%', width: '100%' }}>
            <StyledDataGrid
                rows={data.rows.map((row, _) => ({ id: row["Country"], ...row }))}
                columns={[
                    { field: 'Country', minWidth: 150, flex: 1, },
                    { field: 'ISO-3 Code', minWidth: 90, flex: 0.5, disableColumnMenu: true, sortable: false },
                    { field: '2021', minWidth: 80, flex: 0.4, align: 'right', headerAlign: 'right', disableColumnMenu: true, },
                    { field: '2020', minWidth: 80, flex: 0.4, align: 'right', headerAlign: 'right', disableColumnMenu: true, },
                    { field: '2019', minWidth: 80, flex: 0.4, align: 'right', headerAlign: 'right', disableColumnMenu: true, },
                    { field: '2015', minWidth: 80, flex: 0.4, align: 'right', headerAlign: 'right', disableColumnMenu: true, },
                    { field: '2010', minWidth: 80, flex: 0.4, align: 'right', headerAlign: 'right', disableColumnMenu: true, },
                    { field: '2000', minWidth: 80, flex: 0.4, align: 'right', headerAlign: 'right', disableColumnMenu: true, }
                ]}
                getRowClassName={(params) => `row-color-${country_color_map[params.row.id]}`}
                disableRowSelectionOnClick={true}
                disableColumnSelector={true}
            />
        </Box>
    );
}