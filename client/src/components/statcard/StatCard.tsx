import { Card, CardHeader } from '@mui/material';

function StatCard() {
  return (
    <Card sx={(theme) => ({ width: theme.spacing(40), minWidth: theme.spacing(30), marginBlock: theme.spacing(2), marginRight: theme.spacing(2) })}>
      <CardHeader title="50" subheader="points" sx={{ textAlign: 'center' }} />
    </Card>
  );
}

export default StatCard;
