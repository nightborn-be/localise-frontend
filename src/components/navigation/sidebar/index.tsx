import { Box } from "@chakra-ui/react";
import SidebarHeader from "./header";

const Sidebar = () => {
	return (
		<Box w="245px" borderRight={"1px solid #E7E9F4"}>
			<SidebarHeader />
		</Box>
	);
};

export default Sidebar;
