package com.example.MusicApp.Repositories.Task;


import com.example.MusicApp.models.Task;

import com.example.MusicApp.projections.TaskProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = TaskProjection.class)
public interface TaskRepository extends JpaRepository<Task, Long>, TaskRepositoryCustom {
}
