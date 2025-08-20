import { Box } from "@mui/material";
import type { FC, ReactNode } from "react";
import DashboardSidebar from "@/components/sidebars/DashboardSidebar";

const Sidebar: FC<{children?: ReactNode}> = () => {
    return <Box sx={(theme) => ({backgroundColor: theme.palette.primary.main})}>
        <DashboardSidebar />
    </Box>
}
export default Sidebar;