import UnknownPage from '@/app/[lang]/404';
import PreviousPageButton from '@/app/ui/button/previousPage';
import Comment from '@/app/ui/questLog/comment';
import Avatar from '@/app/ui/user/avatar';
import { format } from 'date-fns';
import Image from 'next/image';

interface ArticleProps {
  params: {
    lang: string;
    game: string;
    uuid: string;
  };
}

export async function generateMetadata({ params }: ArticleProps) {
  const response = await fetch(
    `http://localhost:3000/api/game/${params.game}/news/${params.uuid}`
  );
  const article = (await response.json()) as Article;

  return { title: `${article.title || '404'} | Quest Beta` };
}

export default async function Article(props: ArticleProps) {
  const response = await fetch(
    `http://localhost:3000/api/game/${props.params.game}/news/${props.params.uuid}`
  );
  const article = (await response.json()) as Article;

  if (!article.id) {
    return <UnknownPage params={props.params} />;
  }

  return (
    <div className="relative flex flex-col items-center justify-center">
      <PreviousPageButton />
      <h1 className="text-lg font-bold uppercase">{props.params.game}</h1>
      <h1 className="text-sm text-foreground-light">{article.title}</h1>
      <div className="flex flex-col items-center gap-4">
        <div className="after:background-none relative my-1 mt-6 flex w-[39.625rem] flex-col items-center gap-2 after:pointer-events-none after:absolute after:top-[-0.3rem]  after:h-[calc(100%+0.6rem)] after:w-[calc(100%-0.475rem)] after:rounded-lg after:border after:border-accent after:content-['']">
          <Image
            src={article.banner}
            width={635}
            height={250}
            className="rounded-lg"
            alt="game image"
          />
          <div className="w-full rounded-lg bg-white px-6 py-4">
            <p>{article.content}</p>
          </div>
          <div className="flex w-full flex-col gap-4 rounded-lg bg-white px-6 py-4">
            <p>{article.content}</p>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Avatar avatar={article.author.avatar} />
                <div className="flex flex-col gap-1">
                  <p className="family lato text-lg font-medium">
                    {article.author.username}
                  </p>
                  <p className="text-xs text-accent">
                    {format(new Date(article.date), 'MMM, dd/yyyy')}
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-xs text-foreground-light">
                  {article.comments.length} comments
                </p>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-lg font-bold uppercase">Comments</h1>
        <div className="after:background-none relative my-1 flex w-[39.625rem] flex-col items-center gap-2 after:pointer-events-none after:absolute after:top-[-0.3rem]  after:h-[calc(100%+0.6rem)] after:w-[calc(100%-0.475rem)] after:rounded-lg after:border after:border-accent after:content-['']">
          <div className="flex w-full flex-col gap-4 rounded-lg bg-white px-6 py-4">
            {article.comments.map((comment) => (
              <Comment
                comment={comment}
                key={comment.id}
                lang={props.params.lang}
              />
            ))}
          </div>
        </div>
        <h1 className="text-lg font-bold uppercase">
          Other articles you may like
        </h1>
      </div>
    </div>
  );
}
