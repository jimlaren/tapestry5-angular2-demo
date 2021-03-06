package dev.openshift.tapestry.angular2.services;

import dev.openshift.tapestry.angular2.entity.News;

import org.apache.tapestry5.hibernate.annotations.CommitAfter;

import java.util.List;

public interface NewsDAO
{
	List<News> getNews(); 
	
    List<News> getNewsByAuthor(String phoneId);
    
    News getNewsById(int id);
    
    News getRandomNews();

    @CommitAfter
    void add(News news);

    @CommitAfter
    News incLike(int newsId);

    @CommitAfter
    News delete(int newsId);

	

	

}
