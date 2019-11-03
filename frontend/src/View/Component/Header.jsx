import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { FaSistrix } from "react-icons/fa"
import InputBase from '@material-ui/core/InputBase'
import { fade } from '@material-ui/core/styles'
import { IconButton, Tooltip } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import ListOrder from '@material-ui/icons/List'
import LocalGroceryStore from '@material-ui/icons/LocalGroceryStore'
import Login from '@material-ui/icons/PowerSettingsNewOutlined'
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    itemLink: {
        color: 'white',
        textTransform: 'uppercase',
        fontSize: '16px',
        textDecoration: 'none',
        marginRight: '35px',
        cursor: 'pointer'
    },
    itemMenu: {
        position: 'absolute !important',
        right: '0 !important',
        margin: '0px 24px !important',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBar: {
        position: 'absolute',
        height: '80px'
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
}));

export default function PersistentDrawerLeft(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [inputSearch] = React.useState('');
    const [open, setOpen] = React.useState(false);

    function handleDrawerOpen() {
        setOpen(true);
    }

    function handleDrawerClose() {
        setOpen(false);
    }
    function Home() {
        props.link.history.push('/')
    }
    function HelthyFood() {
        props.link.history.push('/HelthyFood/02')
    }
    function Cosmetics() {
        props.link.history.push('/Cosmetics/01')
    }
    function Signin() {
        props.link.history.push('/login/11')
    }
    function ListBook() {
        props.link.history.push('/ListOrder/03')
    }
    function InputSearch(e){
        let value = e.currentTarget.value
        console.log('value', value)
    }
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar

                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar style={{ fontSize: '30px', marginTop: '10px' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon style={{ fontSize: '30px' }} />
                    </IconButton>
                    <Typography className={classes.itemLink}>
                        <a
                            onClick={Home}
                        >TRANG CHỦ</a>
                    </Typography>
                    <Typography className={classes.itemLink}>
                        <a onClick={Cosmetics}>
                            MỸ PHẨM
                        </a>
                    </Typography>
                    <Typography className={classes.itemLink}>
                        <a onClick={HelthyFood}>
                            THỰC PHẨM CHỨC NĂNG
                        </a>
                    </Typography>
                    <Typography>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <FaSistrix style={{ fontSize: '25px' }} />
                            </div>
                            <InputBase placeholder="Search…" classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }} inputProps={{ 'aria-label': 'Search' }} />
                        </div>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <Tooltip title="Login" key="Login" onClick={Signin} style={{ textAlign: 'center' }}>
                    <IconButton >
                        <Login style={{ fontSize: '40px' }} />
                    </IconButton>
                </Tooltip>
                <Divider />
                <List>
                    <Tooltip title="Trang chủ" key="Home" onClick={Home}>
                        <IconButton>
                            <HomeIcon />
                        </IconButton>
                    </Tooltip> Trang chủ <br />
                    <Tooltip title="Mỹ phẩm" key="Cosmetics" onClick={Cosmetics}>
                        <IconButton>
                            <LocalGroceryStore />
                        </IconButton>
                    </Tooltip> Mỹ phẩm <br />
                    <Tooltip title="Thực phẩm chức năng" key="HelthyFood" onClick={HelthyFood}>
                        <IconButton>
                            <LocalGroceryStore />
                        </IconButton>
                    </Tooltip> Thực phẩm chức năng  <br />
                    <Tooltip title="Danh sách đặt hàng" key="ListOrder" onClick={ListBook}>
                        <IconButton>
                            <ListOrder />
                        </IconButton>
                    </Tooltip> Danh sách đặt hàng
                </List>
                <Divider />
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
            </main>
        </div>
    );
}