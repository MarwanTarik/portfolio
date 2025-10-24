import { Header } from "@/components/Header";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { Footer } from "@/components/Footer";

export const Route = createRootRoute({
	component: () => (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main className="flex-1">
				<Outlet />
			</main>
			<TanStackDevtools
				config={{
					position: "bottom-right",
				}}
				plugins={[
					{
						name: "Tanstack Router",
						render: <TanStackRouterDevtoolsPanel />,
					},
				]}
			/>
			<Footer />
		</div>
	),
});
