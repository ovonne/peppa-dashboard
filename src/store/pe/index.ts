const permissions = [
  { name: "John Doe", permission: "read_users", group: "Admin" },
  { name: "Jane Smith", permission: "edit_users", group: "Admin" },
  { name: "Chris Johnson", permission: "delete_users", group: "Admin" },
  { name: "Anna Lee", permission: "create_posts", group: "Editor" },
  { name: "Mark Brown", permission: "edit_posts", group: "Editor" },
  { name: "Emily White", permission: "delete_posts", group: "Editor" },
  { name: "Michael Green", permission: "read_reports", group: "Manager" },
  { name: "Sarah Black", permission: "export_reports", group: "Manager" },
  { name: "David King", permission: "manage_settings", group: "SuperAdmin" },
];

export { permissions };
