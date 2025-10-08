import { Nav as SemiNav } from "@douyinfe/semi-ui";
import { useLocation, useNavigate } from "react-router-dom";

export default function Nav() {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const selectedKey = pathname === "/" ? "about" : pathname.slice(1);

    return (
        <SemiNav
            mode="horizontal"
            header={{
                logo: <span style={{ fontSize: 20 }}>👨‍💻</span>,
                text: "Your Name",
            }}
            selectedKeys={[selectedKey]}
            items={[
                { itemKey: "about", text: "About", onClick: () => navigate("/") },
                { itemKey: "projects", text: "Projects", onClick: () => navigate("/projects") },
                { itemKey: "blog", text: "Blog", onClick: () => navigate("/blog") },
                { itemKey: "resume", text: "Resume", onClick: () => navigate("/resume") },
                { itemKey: "contact", text: "Contact", onClick: () => navigate("/contact") },
            ]}
        />
    );
}