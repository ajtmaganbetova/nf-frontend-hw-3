import Posts from "@/components/posts/Posts";
import Hero from "@/components/hero/hero";

export default function Home() {
  return (
      <div className="container">
        <div className="wrapper">
            <Hero name="Hello, world!"/>
                <Posts/>
            <hr />
        </div>
    </div>
  );
}
