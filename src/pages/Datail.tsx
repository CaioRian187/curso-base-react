import { useParams, useSearchParams } from "react-router-dom";

import { PageLayout } from "../shared/layout/page-layout/PageLayout";

export const Datail = () => {

    const { id } = useParams();
    const [searchParams] = useSearchParams();

    return (
        <PageLayout title="Detalhes">
            Datail {id} {searchParams.get('filter')}
        </PageLayout>
    );
}