import styled from "@emotion/styled";
import Avatar from "../../../../assets/images/avatar.png";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { MailOutline } from "@mui/icons-material";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const StyledHero = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledImg = styled("img")(() => ({
  width: "100%",
  borderRadius: "50%",
  position: "relative",
}));

const Hero = () => {
  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4}>
            <Box position="relative">
                <Box position="absolute" width={"150%"} top={-100} right={0}>
                    <AnimatedBackground />
                </Box>
                    <StyledImg src={Avatar} alt="Avatar de João Lima" />
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h1">João Lima</Typography>
            <Typography variant="h2" color="textSecondary">
              Desenvolvedor Front-End
            </Typography>
            <Grid container spacing={2} justifyContent="center" mt={2}>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<DownloadIcon />}
                >
                  Download CV
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  color="secondary"
                  startIcon={<MailOutline />}
                >
                  Entrar em contato
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;
