CREATE TABLE gallery (
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR(50000) NOT NULL,
	"description" VARCHAR(500) NOT NULL,
	"likes" DECIMAL
);

INSERT INTO gallery ("path", "description", "likes")
VALUES 
('images/Kisokaido32_Motoyama.jpeg', 'Print made by Ando Hiroshige in the late 1830s depicting a station of the Nakasendo', 0), 
('images/Kisokaido33_Niekawa.jpeg', 'Print made by Ando Hiroshige in the late 1830s depicting a station of the Nakasendo', 0), 
('images/Kisokaido34_Narai.jpeg', 'Print made by Ando Hiroshige in the late 1830s depicting a station of the Nakasendo', 0),
('images/Kisokaido35_Yabuhara.jpeg', 'Print made by Ando Hiroshige in the late 1830s depicting a station of the Nakasendo', 0),
('images/Kisokaido36_Miyanokoshi.jpeg', 'Print made by Ando Hiroshige in the late 1830s depicting a station of the Nakasendo', 0),
('images/Kisokaido37_Fukushima.jpeg', 'Print made by Ando Hiroshige in the late 1830s depicting a station of the Nakasendo', 0),
('images/Kisokaido38_Agematsu.jpeg', 'Print made by Ando Hiroshige in the late 1830s depicting a station of the Nakasendo', 0);
