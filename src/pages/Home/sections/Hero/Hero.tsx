import styled from "@emotion/styled"
import Avatar from "../../../../assets/images/avatar.png"
import { Button, Container, Grid, ListItem, Typography } from "@mui/material"
import DownloadIcon from '@mui/icons-material/Download';
import { MailOutline } from "@mui/icons-material";

const Hero = () => {
    const StyledHero = styled("div")(()=> ({
        backgroundColor: "black",
        height: "100vh"
    }))

    const StyledImg = styled("img")(()=> ({
        width: "100%",
        borderRadius: "50%"
    }))
    return (
      <StyledHero>
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <StyledImg src={Avatar} />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Typography color="primary" variant="h1">João Lima</Typography>
                    <Typography color="primary" variant="h2">Desenvolvedor Front-End</Typography>
                    <Grid container display="flex" justifyContent="center">
                        <Grid item xs={12} md={4} display="flex" justifyContent="center">
                            <Button>
                                <DownloadIcon />
                                Download CV
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={4}  display="flex" justifyContent="center">
                            <Button>
                                <MailOutline/>
                                Entrar em contato
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
      </StyledHero>
    )
  }
  
  export default Hero
  