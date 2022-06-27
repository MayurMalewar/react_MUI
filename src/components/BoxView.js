import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InsideBox from './insidebox';

function BoxView (props) {
    return(
        <>
 <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {props.data.map((item, index) => (
            <InsideBox  title={item.heading} icon={item.icon} list={item.list} index={index} />
        ))}
      </Grid>
    </Box>
</>
    )
};
export default BoxView;