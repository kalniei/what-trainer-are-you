import Image from 'next/image';
import { Grid, Divider } from '@mui/material';

const Header = (): JSX.Element => {
  return (
    <>
      <Grid item xs={12} mt={2}>
        <Image src="/brainup-logo.png" alt="Brain Up" width={145} height={83} />
      </Grid>
      <Divider sx={{ width: '100%' }} />
    </>
  );
};

export default Header;
