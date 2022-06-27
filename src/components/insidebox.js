
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Icon from '@mui/material/Icon';
import CustomIcon from './CustomIcon';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function InsideBox (props) {
    return(
      // <Grid container sx={{ color: 'text.primary' ,}} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >

      <Grid item xs={2} sm={4} md={4} key={props.index}>
          <Item>
        <div 
        style={{ display: 'flex', justifyContent:"space-between", alignItems: 'center', }}
        onClick={()=>{}}
        >
          <div>
          <CustomIcon iconName={props.icon} styling={{fontSize:20}}/>
         <text style={{marginLeft:5,fontSize:18}}>{props?.title}</text>
          </div>
          <CustomIcon iconName="ArrowForwardIos" styling={{fontSize:15}}/>
         {/* <ArrowForwardIosIcon
          style={{fontSize:15}} 
      //    fontSize='small'
         /> */}
        </div>
        
        {
        props?.list?.map((item)=>
          <div style={{ display: 'flex', justifyContent:"space-between",paddingRight:5 }}>
         <text>{item.text}</text>
         <text>{item.amount}</text>      
        </div>
        )
        }
        </Item>
      </Grid>
    // </Grid>
    )
};
export default InsideBox;