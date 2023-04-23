import Image from "next/image";
import Head from "next/head";
import { Client } from "@notionhq/client";

import Task from "../components/Task";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home(props) {
    return (
        <>
            <Head>
                <title>Black List</title>
                <meta
                    name="description"
                    content="The collection of talks that will blow your mind."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <main className="p-3 px-6 max-w-[720px] mx-auto">
                <div className="w-full h-48 bg-purple absolute inset-0 -z-10" />
                <Header last_edited={props.last_edited} />

                <div className="flex flex-wrap items-center gap-3 my-4 border-2 border-zinc-900 rounded p-3 px-6 italic text-lg text-zinc-600">
                    {props.comment}
                </div>

                <ul className="pt-3">
                    {props.posts.map((i) => (
                        <Task key={i.id} {...i} />
                    ))}
                </ul>
                <Footer />
            </main>
        </>
    );
}

export async function getStaticProps(context) {
    // Initializing a client
    const notion = new Client({
        auth: process.env.NOTION_TOKEN,
    });

    let title = "";

    const page_id = process.env.NOTION_PAGE_ID;
    const page_data = await notion.pages.retrieve({ page_id });

    const comment = await notion.comments.list({ block_id: page_id });

    const resp = await notion.blocks.children.list({
        block_id: page_id,
        page_size: 50,
    });

    let table = {};
    table.id = resp.results[0].id;

    let posts = [];

    const response = await notion.blocks.children.list({
        block_id: table.id,
        page_size: 50,
    });

    let tableColumns = [];

    for (let item of response.results[0]["table_row"]["cells"]) {
        tableColumns.push(item[0].plain_text);
    }

    response.results.shift();

    for (let item of response.results) {
        let obj = {
                id: item.id,
            },
            row = item.table_row.cells;

        for (let i = 0; i < tableColumns.length; i++) {
            obj[tableColumns[i]] = row[i][0].plain_text;
        }

        posts.push(obj);
    }

    return {
        props: {
            posts,
            comment: comment.results[0].rich_text[0].plain_text,
            last_edited: page_data.last_edited_time,
        },
        revalidate: 60 * 60 * 2,
    };
}
