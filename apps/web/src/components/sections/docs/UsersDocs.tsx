import { Section } from "../Section";


export default function UsersDocs(){
    return(
        <>
            <Section>
                <div className="pb-[2.5vh]">
                    <p className="text-lg font-medium">users/user</p>
                    <p className="pt-[2.5vh]">a GET request that returns profile data for a given a fid or fname</p>
                    <p className="pt-2">input:</p>
                    <ol className="parenthetical-list-style">
                        <li>fid - number(optional)</li>
                        <li>fname - string(optional)</li>
                        <li>cursor - number(optional)</li>
                        <li>limit - number(optional, max = 100)</li>
                    </ol>
                    <p className="pt-[2.5vh]">note: you must pass either fid or fname, and not both</p>
                </div>
            </Section>
        </>
    )
}