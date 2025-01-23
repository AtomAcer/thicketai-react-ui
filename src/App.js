import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Paper,
  Button,
  TextField,
  IconButton,
  Box,
} from "@mui/material";
import { AttachFile, Mic, Menu, InsertDriveFile, FolderOpen } from "@mui/icons-material";

// chatbot UI
const ChatbotUI = () => {
  const [voice, setVoice] = useState("Adam");
  const [message, setMessage] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const title = "App Demo - Intelligent Chat Interface";
  const truncatedTitle = title.length > 30 ? title.substring(0, 30) + "..." : title;

  return (
    <div style={{ display: "flex", height: "100vh", flexDirection: "column" }}>
      {/* Top Bar with Centered Title */}
      <AppBar position="static" sx={{ backgroundColor: "#4A5280" }}>
        <Toolbar sx={{ justifyContent: "center" }}>
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            {truncatedTitle}
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Secondary Bar */}
      <Box sx={{ display: "flex", alignItems: "center", padding: 1, backgroundColor: "#F0F0F0", borderBottom: "1px solid #CCC" }}>
        <IconButton onClick={() => setDrawerOpen(true)} sx={{ marginRight: 2 }}>
          <Menu />
        </IconButton>
        <Typography variant="subtitle1" sx={{ flexGrow: 2 }}>
          {/* Conversations */}
        </Typography>
        <Typography sx={{ marginRight: 1 }}>Select Voice:</Typography>
        <Select
          value={voice}
          onChange={(e) => setVoice(e.target.value)}
          size="small"
          sx={{ backgroundColor: "#FFF" }}
        >
          <MenuItem value="Adam">Adam</MenuItem>
          <MenuItem value="Eve">Eve</MenuItem>
        </Select>
      </Box>

      {/* Sidebar */}
      <Drawer variant="temporary" anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Typography variant="h6" sx={{ padding: 2 }}>Conversations</Typography>
        <List>
          {["John Doe", "Jane Smith", "Alex Brown"].map((name, index) => (
            <ListItem button key={index}>
              <ListItemText primary={name} secondary="Last message summary..." />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Chat Area */}
      <div style={{ flexGrow: 1, display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#EAEAEA" }}>
        <Paper elevation={3} sx={{ padding: 3, display: "flex", gap: 3, borderRadius: 2 }}>

          {/* Common styles for equal height */}
          {[
            { icon: <InsertDriveFile sx={{ fontSize: 40, color: "#4A5280" }} />, text: "Upload Document", button: true },
            { icon: <FolderOpen sx={{ fontSize: 40, color: "#4A5280" }} />, text: "Use Existing", select: true }
          ].map((item, index) => (
            <Box
              key={index}
              sx={{
                textAlign: "center",
                padding: 1,
                backgroundColor: "#FFF",
                borderRadius: 2,
                boxShadow: 4, // Increase shadow intensity
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                minWidth: "180px",
                minHeight: "150px",
                transition: "box-shadow 0.3s ease-in-out", // Smooth hover effect
                "&:hover": {
                  boxShadow: 20, // Stronger shadow on hover for a nice effect
                }
              }}
            >
              {item.icon}
              <Typography variant="body1" sx={{ marginTop: 1 }}>{item.text}</Typography>
              {item.button && (
                <Button variant="contained" sx={{ marginTop: 1, backgroundColor: "#4A5280" }}>
                  Upload
                </Button>
              )}
              {item.select && (
                <Select size="small" sx={{ marginTop: 1, backgroundColor: "#FFF", width: "100%" }}>
                  <MenuItem value="doc1">Document 1</MenuItem>
                  <MenuItem value="doc2">Document 2</MenuItem>
                </Select>
              )}
            </Box>
          ))}

        </Paper>
      </div>


      {/* Chat Input */}
      <div style={{ display: "flex", alignItems: "center", padding: 8, backgroundColor: "#FFF", borderTop: "1px solid #CCC" }}>
        <IconButton>
          <AttachFile />
        </IconButton>
        <TextField
          fullWidth
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          sx={{ width: '85%', borderRadius: 2 }}
        />
        <Button variant="contained" sx={{ marginLeft: 2, fontSize: 15, backgroundColor: "#4A5280" }}>Submit</Button>
        <IconButton sx={{ fontSize: 40, marginLeft: 2 }}>
          <Mic fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
};

export default ChatbotUI;