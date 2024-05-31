import type { LoaderFunctionArgs } from "@remix-run/router";

export function loader({ params }: LoaderFunctionArgs) {
  console.log(params);
  return params;
}

export default function EventPlannerDescription() {
  return <div>This is the event planner's description page</div>;
}
