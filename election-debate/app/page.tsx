"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThumbsUp, ThumbsDown, MessageSquare } from "lucide-react"

const Home = () => {
  const [topics, setTopics] = useState<{ id: string; text: string; upvotes: number; downvotes: number }[]>([]);
  const [newTopic, setNewTopic] = useState('');
  const [comments, setComments] = useState<{ [key: string]: string[] }>({});
  const [newComment, setNewComment] = useState('');

  const addTopic = () => {
    if (newTopic.trim() !== '') {
      const topicId = Date.now().toString();
      setTopics([...topics, { id: topicId, text: newTopic, upvotes: 0, downvotes: 0 }]);
      setComments({ ...comments, [topicId]: [] });
      setNewTopic('');
    }
  };

  const voteTopic = (id: string, voteType: 'upvotes' | 'downvotes') => {
    setTopics(topics.map(topic => 
      topic.id === id ? { ...topic, [voteType]: topic[voteType] + 1 } : topic
    ));
  };

  const addComment = (topicId: string) => {
    if (newComment.trim() !== '') {
      setComments({
        ...comments,
        [topicId]: [...comments[topicId], newComment]
      });
      setNewComment('');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Election Debate Topic Tracker</h1>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Live Stream</h2>
        <div className="bg-gray-200 w-full h-192 flex items-center justify-center">
          <iframe
            width="100%"
            height="600px"
            src="https://www.youtube.com/embed/axZAtOxx-aA?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Add New Topic</h2>
        <div className="flex">
          <Input
            type="text"
            value={newTopic}
            onChange={(e) => setNewTopic(e.target.value)}
            placeholder="Enter a new topic"
            className="mr-2"
          />
          <Button onClick={addTopic}>Add Topic</Button>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Current Topics</h2>
        {topics.map((topic) => (
          <Card key={topic.id} className="mb-4">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>{topic.text}</span>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" onClick={() => voteTopic(topic.id, 'upvotes')}>
                    <ThumbsUp className="mr-2 h-4 w-4" /> {topic.upvotes}
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => voteTopic(topic.id, 'downvotes')}>
                    <ThumbsDown className="mr-2 h-4 w-4" /> {topic.downvotes}
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mt-2">
                <h3 className="font-semibold">Comments</h3>
                {comments[topic.id].map((comment, index) => (
                  <p key={index} className="text-sm mt-1">{comment}</p>
                ))}
                <div className="flex mt-2">
                  <Input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment"
                    className="mr-2"
                  />
                  <Button size="sm" onClick={() => addComment(topic.id)}>
                    <MessageSquare className="mr-2 h-4 w-4" /> Comment
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;