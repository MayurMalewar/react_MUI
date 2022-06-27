import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
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
    )
};
export default InsideBox;