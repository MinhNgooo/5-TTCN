package com.example.demo.service;

import com.example.demo.dto.LessonDto;
import com.example.demo.entity.Lesson;

import java.util.List;
import java.util.Optional;

public interface LessonServiceInterface {
  List<LessonDto> getLesson(Integer userId, String name);

  LessonDto createLesson(Integer userId, String name, String description, Integer amount);

  LessonDto getLessonById(Integer id);

  LessonDto deleteLesson(Integer id);
}
