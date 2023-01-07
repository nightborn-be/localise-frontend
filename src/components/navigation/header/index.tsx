import { Stack } from "@chakra-ui/react";
import { Breadcrumb } from "@components/navigation/breadcrumb";
import Tabs from "@components/navigation/tabs";
import Tab from "@components/navigation/tabs/tab";
import { useRouter } from "next/router";
import { Key, useMemo } from "react";

const PROJECT_ROUTES = ["glossary", "settings", "statistics", "history"];

export default function ProjectHeader() {
	// Attributes
	const {
		push,
		asPath,
		query: { projectId },
	} = useRouter();

	const activeTab = useMemo(() => {
		const lastSegment = asPath.split("/").pop();
		if (!lastSegment) return 0;
		return PROJECT_ROUTES.indexOf(lastSegment);
	}, [asPath]);

	// Functions
	const handleChangeTab = (activeTab: Key) => {
		push(`/projects/${projectId}/${PROJECT_ROUTES[activeTab as number]}`);
	};

	// Render
	return (
		<Stack spacing={0} w="-webkit-fill-available">
			<Breadcrumb elements={[{ label: "Projects" }, { label: "Mobile Application" }]} />
			<Tabs activeKey={activeTab} onChange={handleChangeTab}>
				<Tab title="Glossary"></Tab>
				<Tab title="Settings"></Tab>
				<Tab title="Statistics"></Tab>
				<Tab title="History"></Tab>
			</Tabs>
		</Stack>
	);
}
