import { setPageProperties } from '@/store/actions/page.action';
import { Box, Paper } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

function Board() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageProperties('board', `/rooms/${id}`, false, null));
  }, [dispatch]);
  const { id } = useParams();
  const estimations = [0, 1, 1, 2, 3, 5, 8, 13, 21];

  return (
    <Box sx={(theme) => ({ display: 'flex', margin: '0 auto' })}>
      <Paper sx={(theme) => ({ display: 'flex', gap: theme.spacing(2) })}>
        {estimations.map((estimation, index) => (
          <Box
            key={index}
            sx={(theme) => ({
              background: theme.palette.background.default,
              width: theme.spacing(10),
              height: theme.spacing(15),
            })}
          >
            {estimation}
          </Box>
        ))}
      </Paper>
    </Box>
  );
}

export default Board;
