import { useState } from 'react';
import {
    Grid,
    Typography,
    Button,
    Stack,
    AppBar,
    Toolbar,
    TextField,
    MenuItem
} from '@mui/material'

const status = [
    {
        value: 'balanced',
        label: '60% stocks / 40% bonds'
    },
    {
        value: 'riskier',
        label: '20% stocks / 80% bonds'
    },
    {
        value: 'riskest',
        label: '100% stocks'
    }
];

const Benchmark = ({ isLoading }) => {
    const [value, setValue] = useState('');
    const [timef, setTf] = useState('month');
    const [currency, setCurrency] = useState('SGD');
    const [color, setColor] = useState('white');
    const [textColor, setTextColor] = useState('rgb(63, 182, 178)');
    const gridSpacing = 3;
    return (
        <>
            <AppBar sx={{ bgcolor: "white" }} elevation={0} position="sticky">
                <Toolbar>
                    <Grid container rowSpacing={4.5} columnSpacing={2.75} justifyContent="flex-start">
                        {/* row 1 */}
                        <Grid item xs={12} sx={{ mb: -2.25 }}>
                            <Typography variant="h5" sx={{ color: "black", fontWeight: 'bold' }}>
                                Portfolio Benchmark
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <>
                <AppBar //new row
                    position="sticky"
                    elevation={0}
                    sx={{ bgcolor: "#dbdbdb" }}
                >
                    <Toolbar>
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12}>
                                <Grid container alignItems="center" justifyContent="space-between">
                                    <Grid item>
                                        <Grid container direction="column" spacing={1}>
                                            <Grid item>
                                                <Typography sx={{ color: "black", fontWeight: 'medium' }} variant="subtitle2">General Investing</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography sx={{ color: "#4169e1", fontWeight: 'bold' }} variant="subtitle2">StashAway Risk Index 14%</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            id="benchmark-portfolio"
                                            select
                                            value={value}
                                            onChange={(e) => setValue(e.target.value)}
                                        >
                                            {status.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </>

            <AppBar //new row
                position="sticky"
                elevation={0}
                sx={{ bgcolor: "white" }}
            >
                <Toolbar>


                    <Grid container justifyContent="flex-start" >
                        <Stack direction="row" alignItems="center" spacing={0} >
                            <Button sx={{ color: "rgb(63, 182, 178)" }}
                                className='btn btn-primary'
                                size="small"
                                onClick={() => {
                                    setTf('month');
                                    setTextColor('white');
                                    setColor('rgb(63, 182, 178)')
                                    //need to fix onClick color states
                                }}
                                color={timef === 'month' ? 'primary' : 'secondary'}
                                variant={timef === 'month' ? 'outlined' : 'text'}
                            >
                                1 Month
                            </Button>
                            <Button sx={{ color: "rgb(63, 182, 178)" }}
                                size="small"
                                onClick={() => {
                                    setTf('semi');
                                }}
                                color={timef === 'semi' ? 'primary' : 'secondary'}
                                variant={timef === 'semi' ? 'outlined' : 'text'}
                            >
                                6 Months
                            </Button>
                            <Button sx={{ color: "rgb(63, 182, 178)" }}
                                size="small"
                                onClick={() => setTf('ytd')}
                                color={timef === 'ytd' ? 'primary' : 'secondary'}
                                variant={timef === 'ytd' ? 'outlined' : 'text'}
                            >
                                Year-to-date
                            </Button>
                            <Button sx={{ color: "rgb(63, 182, 178)" }}
                                size="small"
                                onClick={() => setTf('year')}
                                color={timef === 'year' ? 'primary' : 'secondary'}
                                variant={timef === 'year' ? 'outlined' : 'text'}
                            >
                                1 Year
                            </Button>
                            <Button sx={{ color: "rgb(63, 182, 178)" }}
                                size="small"
                                onClick={() => setTf('max')}
                                color={timef === 'max' ? 'primary' : 'secondary'}
                                variant={timef === 'max' ? 'outlined' : 'text'}
                            >
                                Max
                            </Button>
                        </Stack>
                    </Grid>
                    <Grid container justifyContent="flex-end">
                        <Stack direction="row" alignItems="center" spacing={0}>
                            <Button sx={{ color: "rgb(63, 182, 178)" }}
                                size="small"
                                onClick={() => setCurrency('SGD')}
                                color={currency === 'SGD' ? 'primary' : 'secondary'}
                                variant={currency === 'SGD' ? 'outlined' : 'text'}
                            >
                                SGD
                            </Button>
                            <Button sx={{ color: "rgb(63, 182, 178)" }}
                                size="small"
                                onClick={() => setCurrency('USD')}
                                color={currency === 'USD' ? 'primary' : 'secondary'}
                                variant={currency === 'USD' ? 'outlined' : 'text'}
                            >
                                USD
                            </Button>
                        </Stack>
                    </Grid>


                </Toolbar>
            </AppBar>
        </>
    )
}

export default Benchmark