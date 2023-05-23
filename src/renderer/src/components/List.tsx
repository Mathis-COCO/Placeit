import { ListItemText, Typography } from '@mui/material'
import { Item } from './Item'


interface ListProperties {
    item: Item
}

export function ListComponent({ item }: ListProperties) {
    return (
                    <ListItemText
                        sx={{ display: 'flex', flexDirection: 'column', overflowWrap: 'break-word' }}
                    >
                        <Typography sx={{ maxWidth: '100%' }} component='h2' variant='h4'>
                            {item.name}
                        </Typography>
                    </ListItemText>
    )
}
