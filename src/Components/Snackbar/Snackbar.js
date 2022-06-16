import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CustomSnackbar = ({ buttonName, type, message, click }) => {
	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen(true);
		click();
	};

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};

	return (
		<Stack spacing={2}>
			<Button variant="outlined" onClick={handleClick}>
				{buttonName}
			</Button>
			<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
				<Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}>
					{message}
				</Alert>
			</Snackbar>
			{/* <Alert severity="error">This is an error message!</Alert>
			<Alert severity="warning">This is a warning message!</Alert>
			<Alert severity="info">This is an information message!</Alert>
			<Alert severity="success">This is a success message!</Alert> */}
		</Stack>
	);
};

export default CustomSnackbar;
