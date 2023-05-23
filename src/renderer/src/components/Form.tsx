import { Box, Button, TextField } from "@mui/material";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

interface FromProperties {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
    handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function FormComponent({ handleSubmit, handleNameChange }: FromProperties) {

    return (
        <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', gap: "1em", flexDirection: "column" }}>
                <TextField
                    id="Name"
                    label="Name"
                    type="text"
                    multiline={true}
                    rows={4}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={handleNameChange}
                />
                <Button type="submit" variant="outlined"><AddCircleOutlineOutlinedIcon /></Button>
            </Box>
        </form>
    )
}