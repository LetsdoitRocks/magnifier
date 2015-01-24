class TicketSupportController < ApplicationController
  before_action :authenticate_account!
  before_filter :verify_account!
  layout 'accounts'

  def index
  end

private
  def account
    params[:account_id]
  end
end