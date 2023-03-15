import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import ExtensionIcon from '@mui/icons-material/Extension';
import ArticleIcon from '@mui/icons-material/Article';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Chart from './components/Chart';

// based on: https://codesandbox.io/s/3ivb9m?file=/demo.tsx:711-735

const drawerWidth = 240;

function DemoPage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
       sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Promethean Metrics
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <ExtensionIcon />
              </ListItemIcon>
              <ListItemText primary="Apis" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText primary="Docs" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px` ,
          p: 3
        }}
      >
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
          <Grid xs={8}>
            <Chart />
          </Grid>
          <Grid xs={8}>
            <Chart />
          </Grid>
          <Grid xs={8}>
            <Chart />
          </Grid>
        </Grid>
      </Box>

    </Box>
  );
}

export { DemoPage };