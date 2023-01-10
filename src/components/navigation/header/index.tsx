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

	const routes = useMemo(() => {
		return {
			glossary: <div>test</div>,
			settings: <div>test</div>,
			statistics: <div>test</div>,
			history: <div>sefd</div>,
		};
	}, []);

	const activeTab = useMemo(() => {
		const lastSegment = asPath.split("/").pop();
		if (!lastSegment) return 0;
		return Object.keys(routes).indexOf(lastSegment);
	}, [asPath, routes]);

	// Functions
	const handleChangeTab = (activeTab: Key) => {
		push(`/projects/${projectId}/${PROJECT_ROUTES[activeTab as number]}`);
	};

	// Render
	return (
		<Stack spacing={0} w="-webkit-fill-available">
			<Breadcrumb elements={[{ label: "Projects" }, { label: "Mobile Application" }]} />
			<Tabs activeKey={activeTab} onChange={handleChangeTab}>
				{Object.keys(routes).map((route) => (
					<Tab key={route} title={route}>
						{routes[route]}
					</Tab>
				))}
			</Tabs>
		</Stack>
	);
}
