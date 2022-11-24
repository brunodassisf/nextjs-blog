interface ICmsService {
  query: string;
}

const TOKEN = process.env.TOKEN_DATO_CMS;

export default async function cmsService({ query }: ICmsService) {
  try {
    const pageContentResponse = await fetch("https://graphql.datocms.com/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Authorization": "Bearer " + TOKEN,
      },
      body: JSON.stringify({
        query,
      }),
    }).then(async (response) => {
      const body = await response.json();
      return body;
    });

    return {
      data: pageContentResponse,
    };
  } catch (err: any) {
    throw new Error(err);
  }
}
