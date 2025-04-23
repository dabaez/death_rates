import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
    Typography,
    Link // Import Link from MUI for consistent styling, or use <a>
} from '@mui/material';
import { Box, Checkbox } from '@mui/material';

interface AboutDataDialogProps {
    open: boolean;
    onClose: () => void;
    ageStandardized: boolean;
    setAgeStandardized: (event: (React.SyntheticEvent|null), isAgeStandardized: boolean) => void;
}

const AboutDataDialog: React.FC<AboutDataDialogProps> = ({ open, onClose, ageStandardized, setAgeStandardized }) => {

    // Link to WHO (replace with the specific page if you have one, otherwise GHO is good)
    const whoLink = "https://www.who.int/data/gho";
    const creditLink = "https://b4ez.com/about/";

    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="about-data-dialog-title"
            aria-describedby="about-data-dialog-description"
            maxWidth="md" // Allow slightly wider dialog for better readability
        >
            <DialogTitle id="about-data-dialog-title">
                About the Data and Quality Indicators
            </DialogTitle>
            <DialogContent dividers> {/* dividers add lines above/below content */}
                {/* Source Information */}
                <DialogContentText component="div" id="about-data-dialog-description" sx={{ mb: 2 }}> {/* Use component="div" to allow nested block elements */}
                    <Typography variant="h6" gutterBottom>
                        <Checkbox
                            checked={ageStandardized}
                            onChange={(event) => setAgeStandardized(event, !ageStandardized)}
                        />
                        Show age-standardized death rates?
                    </Typography>
                    <Typography>
                        The underlying mortality data was primarily obtained from the World Health Organization (WHO) Global Health Observatory.
                        For further details, visit: {' '}
                        <Link href={whoLink} target="_blank" rel="noopener noreferrer">
                            WHO Global Health Observatory
                        </Link>.
                    </Typography>
                </DialogContentText>

                {/* Quality Indicators */}
                <Typography variant="h6" gutterBottom>
                    Data Quality Indicators (Row Color)
                </Typography>
                <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ width: 16, height: 16, bgcolor: '#D6E3BC', mr: 1, flexShrink: 0, border: '1px solid grey' }} /> {/* Visual cue */}
                    <strong>Green:</strong> Multiple years of national death registration data with high completeness and quality of cause-of-death assignment are available.
                </Typography>
                <br />
                <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ width: 16, height: 16, bgcolor: '#FFFFCC', mr: 1, flexShrink: 0, border: '1px solid grey' }} /> {/* Visual cue */}
                    <strong>Light Yellow:</strong> Multiple years of national death registration data are available. Data have low completeness and/or issues with cause-of-death assignment which likely affect estimated deaths by cause and time trends (Moderate quality issues).
                </Typography>
                <br />
                <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ width: 16, height: 16, bgcolor: '#F8ECB8', mr: 1, flexShrink: 0, border: '1px solid grey' }} /> {/* Visual cue */}
                    <strong>Dark Yellow:</strong> Multiple years of national death registration data are available. Data have low completeness and/or issues with cause-of-death assignment which likely affect estimated deaths by cause and time trends (Severe quality issues).
                </Typography>
                <br />
                <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ width: 16, height: 16, bgcolor: '#F2DCDB', mr: 1, flexShrink: 0, border: '1px solid grey' }} /> {/* Visual cue */}
                    <strong>Red:</strong> Death registration data are unavailable or unusable due to quality issues. Estimates of mortality by cause should be interpreted with caution.
                </Typography>

                {/* Credit */}
                <Typography variant="body2" color="text.secondary" sx={{ mt: 3, textAlign: 'center' }}>
                    Visualization and interface by {' '}
                    <Link href={creditLink} target="_blank" rel="noopener noreferrer">
                        b4ez.com
                    </Link>.
                </Typography>

            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} autoFocus>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AboutDataDialog;