import { Filters } from "./Filters";

export function Header() {
    return (
        <>
            <div
                className="bg-secondary rounded"
                style={{ height: "50vh" }}
            ></div>

            <Filters />
        </>
    );
}
