class AccountsController < ApplicationController
  before_action :authenticate_account!
  before_filter :verify_account!

  def index

  end

  def settings
    # raise "xxxx"
  end

private
  def account
    params[:account_id]
  end
end