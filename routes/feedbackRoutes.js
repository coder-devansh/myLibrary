import {Router} from 'express';
import {getFeedBack , postFeedBack , deleteFeedback} from  "../controller/feedbackController.js"

const router = Router();

router.get("/admin/feedback", getFeedBack);
router.post("/feedback", postFeedBack);
router.get("/admin/feedback/:id", deleteFeedback);

export default router;