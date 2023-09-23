import Box from "@mui/material/Box";
import { Button, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import { grey } from "@mui/material/colors";
import { useState } from "react";

function ButtonList() {

    const [text, setText] = useState("");
    
    function dispText(c: string) {
        setText(text+c);
        console.log(text);
        
    }

    return(
        <Box sx={{flexGrow: 1, backgroundColor: "beige"}}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <TextField fullWidth disabled label={text} />
                </Grid>
                <>
                    <Grid item xs={3}>
                        <Button onClick={() => dispText("7")}>7</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button>8</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button>9</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button>/</Button>
                    </Grid>
                </>
                <>
                    <Grid item xs={3}>
                        <Button>4</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button>5</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button>6</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button>*</Button>
                    </Grid>
                </>
                <>
                    <Grid item xs={3}>
                        <Button>1</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button>2</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button>3</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button>-</Button>
                    </Grid>
                </>
                <>
                    <Grid item xs={3}>
                        <Button>0</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button>DEL</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button>=</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button>+</Button>
                    </Grid>
                </>
            </Grid>
        </Box>
    );
}

export default ButtonList;