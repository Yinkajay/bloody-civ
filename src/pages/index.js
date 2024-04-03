import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
const router = useRouter()


  return null;
}


export async function getServerSideProps(context) {
  const redirectUrl = '/playground';

  return {
    redirect: {
      destination: redirectUrl,
      permanent: false,
    },
  };
}
