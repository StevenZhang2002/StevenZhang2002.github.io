import { Space, Typography } from "@douyinfe/semi-ui";

export default function Footer() {
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 24px" }}>
            <Typography.Text>© {new Date().getFullYear()} Your Name · All rights reserved.</Typography.Text>
            <Space>
                <a href="https://github.com/USERNAME" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/USERNAME" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="mailto:you@example.com">Email</a>
            </Space>
        </div>
    );
}