import { Stack } from "@chakra-ui/react";
import ProjectHeader from "../header";
import Sidebar from "../sidebar";

const ProjectLayout = ({ projects }) => {
	return (
		<Stack spacing={0} height={"100vh"} w="100%" direction={"row"}>
			<Sidebar projects={projects} />
			<ProjectHeader />
		</Stack>
	);
};

export default ProjectLayout;
