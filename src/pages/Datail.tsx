import { useParams } from "react-router-dom";

import { PageLayout } from "../shared/layout/page-layout/PageLayout";

export const Datail = () => {

    const { id } = useParams();


    return (
        <PageLayout title="Detalhes">
            Datail {id}
        </PageLayout>
    );
}