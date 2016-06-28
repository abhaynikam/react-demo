# app/controllers/comments_controller.rb
class CommentsController < ApplicationController

  def index
    render json: Comment.all
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render json: @comment
    else
      render json: @comment.errors
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:author, :comment)
  end
end