import Banner from "@/components/Banner";
import BannerForm from "@/components/contact/BannerForm";
import ContactDeliciousRecipe from "@/components/contact/ContactDeliciousRecipe";
import Cta from "@/components/Cta";

export default function Page() {
    return (
        <main>
            <BannerForm />
            <Cta />
            <ContactDeliciousRecipe />
        </main>
    );
}
