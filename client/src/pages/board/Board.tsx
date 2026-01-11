import { setPageProperties } from '@/store/actions/page.action';
import { Box, Paper, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import CustomTable from '@/components/customtable/CustomTable';
import { getTableHeaders } from '@/utils/table.utils';

function Board() {
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(setPageProperties('board', `/rooms/${id}`, false, null));
    }, [dispatch, id]);
    const estimations = [0, 1, 1, 2, 3, 5, 8, 13, 21];

    const tableData = [
        {
            roomId: 'ROOM-101',
            storyId: 'STORY-001',
            summary: 'Initial brainstorming for homepage redesign',
            status: 'IN_PROGRESS',
        },
        {
            roomId: 'ROOM-102',
            storyId: 'STORY-002',
            summary: 'Finalize UI components and design system',
            status: 'PENDING',
        },
        {
            roomId: 'ROOM-103',
            storyId: 'STORY-003',
            summary: 'Implement authentication and user onboarding',
            status: 'COMPLETED',
        },
        {
            roomId: 'ROOM-104',
            storyId: 'STORY-004',
            summary: 'Integrate payment gateway and subscriptions',
            status: 'IN_REVIEW',
        },
    ];

    return (
        <Box
            sx={(theme) => ({
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                maxWidth: 1100,
                mx: 'auto',
                mt: theme.spacing(10),
                mb: theme.spacing(6),
            })}
        >
            <Paper
                elevation={0}
                sx={(theme) => ({
                    display: 'flex',
                    gap: theme.spacing(2),
                    justifyContent: 'space-around',
                    width: '100%',
                    backgroundColor: theme.palette.background.default,
                    px: 2,
                    py: 1,
                    mb: 10,
                })}
                className="hel"
            >
                {estimations.map((estimation, index) => (
                    <Box
                        key={index}
                        sx={(theme) => ({
                            background: theme.palette.background.default,
                            width: theme.spacing(10),
                            height: theme.spacing(15),
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            border: `${theme.spacing(1)} solid ${theme.palette.divider}`,
                        })}
                    >
                        <Typography variant="h6" component="h6">
                            {estimation}
                        </Typography>
                    </Box>
                ))}
            </Paper>
            <CustomTable headers={getTableHeaders(tableData)} data={tableData}/>
        </Box>
    );
}

export default Board;
