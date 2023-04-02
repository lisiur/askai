use crate::{result::Result, utils::ensure_directory_exists};
use directories::ProjectDirs;

pub struct Project {
    pub db_url: String,
}

impl Project {
    pub async fn init() -> Result<Self> {
        let project_dirs = ProjectDirs::from("com", "lisiur", "wizard").unwrap();
        let data_dir = project_dirs.data_dir();

        ensure_directory_exists(data_dir).await?;

        let db_url = "sqlite://".to_string() + data_dir.join("wizard.db").to_str().unwrap();

        Ok(Self { db_url })
    }
}