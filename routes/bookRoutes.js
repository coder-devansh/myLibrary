import { Router } from "express";
import {AddBook,deleteBook, getBookById, getBooks, updateBook, getSummary} from "../controller/bookController.js";

const router = Router();

router.get("/", getBooks)
router.get("/:id", getBookById)
router.post("/addtoShelf", AddBook)
router.put("/:id", updateBook)
router.delete("/removeFromShelf/:id", deleteBook)
router.get("/:id/summary", getSummary)

export default router;