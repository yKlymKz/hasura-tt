import styles from "../styles/Home.module.css";

interface IProps {
  description: string;
  title: string;
  isNoContent?: boolean;
}

const Home = ({ description, title, isNoContent }: IProps) => (
  <div className={styles.container}>
    <main className={styles.main}>
      {isNoContent ? (
        <h1 className={styles.title}>No Content for this tail</h1>
      ) : (
        <>
          <h1 className={styles.title}>Title: {title}</h1>
          <p className={styles.description}>Description: {description}</p>
        </>
      )}
    </main>
  </div>
);

interface ServerSideContext {
  params: {
    tail: string;
  };
}

export async function getServerSideProps({
  params: { tail },
}: ServerSideContext) {
  try {
    const url = `${process.env.HASURA_URL}/api/rest/getPageByTail/${tail}`;
    const resp = await fetch(url, {
      headers: {
        "x-hasura-admin-secret": process.env.HASURA_SECRET ?? "",
      },
    });

    const parsedRes = await resp.json();
    if (resp.status !== 200 || !parsedRes.tiles || !parsedRes.tiles.length) {
      return {
        // notFound: true,
        props: {
          isNoContent: true,
        },
      };
    }

    const { tiles } = parsedRes;
    const {
      page_data: { title, description },
    } = tiles[0];

    return {
      props: { title, description },
    };
  } catch {
    return {
      // notFound: true,
      props: {
        isNoContent: true,
      },
    };
  }
}

export default Home;
