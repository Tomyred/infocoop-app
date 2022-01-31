import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { motion } from 'framer-motion';
import React from 'react';

const useStyles = makeStyles({
    component: {
        textAlign: "center"
    }
})
const Home = () => {

    const classes = useStyles();
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.6 }}
    animate={{
        opacity: 1,
        scale: 1,
        transition: { delay: 0.5 },
    }}
    className={classes.component}
>
    <Typography variant="h1" color="inherit">
        ¡Bienvenido!
    </Typography>
</motion.div>
  );
};

export default Home;
