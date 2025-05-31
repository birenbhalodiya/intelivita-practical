import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import Chef from "@/components/Chef";
import Cta from "@/components/Cta";
import DeliciousRecipe from "@/components/DeliciousRecipe";
import InstaPost from "@/components/InstaPost";
import Recipes from "@/components/Recipes";

export default function Home() {
  return (
    <main>
      <Banner />
      <Categories />
      <Recipes />
      <Chef />
      <InstaPost />
      <DeliciousRecipe />
      <Cta />
    </main>
  );
}
